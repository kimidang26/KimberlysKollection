import {render, screen, cleanup} from "@testing-library/react";
import History from "../components/tabs/orderhistory"

afterEach(() => {
    cleanup();
})

describe ("Display", ()=> {
    test("Gets Display", ()=> {
        render(<History />)
    });
});


// test('should render component stuff', () => {
//     render(<History />) 
//     const order_hist_tag = screen.getByTe
// })