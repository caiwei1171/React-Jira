import React from 'react'

import { IUser } from './type/index'

interface ISearchPanelProps {
  users: IUser[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: ISearchPanelProps['param']) => void
}

export const SearchPanel = ({ param, setParam, users }: ISearchPanelProps) => {
  return (
    <form>
      <div>
        {/* setParam(Object.assign({}, param, { name: evt.target.value })) */}
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value
            })
          }
        >
          <option value="">负责人</option>
          {users.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
