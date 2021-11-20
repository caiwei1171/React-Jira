import React, { Fragment, useEffect, useState } from 'react'
import qs from 'querystring'

import { cleanObject } from 'utils'
import { useMount } from 'hooks/useMount'
import { useDebounce } from 'hooks/useDebounce'

import { List } from './List'
import { SearchPanel } from './SearchPanel'

const apiUrl = process.env.REACT_APP_API_URL

const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debounceParam = useDebounce(param, 200)
  const [list, setList] = useState([])

  useEffect(() => {
    // fetch(`${ apiUrl }/projects?name=${ param.name }&personId=${ param.personId }`).then(async response => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return (
    <Fragment>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </Fragment>
  )
}

export default ProjectListScreen
