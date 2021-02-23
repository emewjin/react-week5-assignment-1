import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '인천' },
    { id: 3, name: '부산' },
  ];
  const regionID = 1;

  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
  ];
  const categoryID = 2;

  function renderList(list, ID) {
    return render(
      <Buttons
        list={list}
        selectedID={ID}
        onClick={handleClick}
      />,
    );
  }

  it('지역들을 보여준다.', () => {
    const { queryByText } = renderList(regions, regionID);
    expect(queryByText('인천')).toBeInTheDocument();
    expect(queryByText('부산')).toBeInTheDocument();
  });

  it('지역을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = renderList(regions, regionID);
    fireEvent.click(queryByText('인천'));
    expect(handleClick).toBeCalled();
  });

  it('선택된 지역은 (V)를 같이 보여준다.', () => {
    const { queryByText } = renderList(regions, regionID);
    expect(queryByText('서울(V)')).toBeInTheDocument();
  });

  it('음식 카테고리들을 보여준다.', () => {
    const { queryByText } = renderList(categories, categoryID);
    expect(queryByText('한식')).toBeInTheDocument();
    expect(queryByText('일식')).toBeInTheDocument();
  });

  it('카테고리를 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = renderList(categories, categoryID);
    fireEvent.click(queryByText('한식'));
    expect(handleClick).toBeCalled();
  });

  it('선택된 지역은 (V)를 같이 보여준다.', () => {
    const { queryByText } = renderList(categories, categoryID);
    expect(queryByText('중식(V)')).toBeInTheDocument();
  });
});
