import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { Wrapper, WrapperTests } from './mainContentStyle'
import Header from './Header'
import TestItem from './TestItem'

const MainContent = (props) => {
  const renderTests = () => {
    const items = []
    for (let i = 0; i < props.data.length; i++) {
      const item = (
        <TestItem
          name={props.data[i].name}
          point={props.data[i].point}
          time={props.data[i].time}
          diff={props.data[i].diff}
          past={props.data[i].past}
        />
      )
      items.push(item)
    }
    return <WrapperTests>{items}</WrapperTests>
  }

  return (
    <Wrapper>
      <Header keyWord={props.keyWord} searchOnChange={props.searchOnChange} />
      {renderTests()}
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        style={{
          marginBottom: '1em',
        }}
      />
    </Wrapper>
  )
}

export default MainContent
