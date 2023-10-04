import React from 'react'
import { Wrapper, InputSearch, ButtonGoto, DropBox, Blank } from './headerStyle'

const Header = (props) => {
  return (
    <Wrapper>
      <InputSearch
        value={props.keyWord}
        type="text"
        onChange={(event) => props.searchOnChange(event)}
      />
      <ButtonGoto>GO TO</ButtonGoto>
      <Blank />
      <DropBox name="filter" id="filter">
        <option value="all">All</option>
        <option value="time">Time</option>
        <option value="point">Point</option>
      </DropBox>
    </Wrapper>
  )
}

export default Header
