import React from "react"; 
import { render, fireEvent, cleanup } from "@testing-library/react";

import ColorList from './ColorList'


afterEach(cleanup);

describe('<ColorList />', () => {
    it('renders without crashing', () => {
        render(<ColorList />)
    })
    it('deletes a color', () => {
        const {getByText} = render(<ColorList />)
        const deleteButton = getByText(/x/i)
    })
})