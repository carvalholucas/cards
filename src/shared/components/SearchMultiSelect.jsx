import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const SearchMultiSelect = ({ options, placeholder, handle }) => (
    <Select
        showSearch
        mode="multiple"
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={handle}
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {options.map((option, index) => (
            <Option
                key={index}
                value={option.value}>
                {option.label}
            </Option>
        ))}
    </Select>
)

export default SearchMultiSelect
