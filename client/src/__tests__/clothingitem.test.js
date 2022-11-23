import { screen, cleanup } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";
import Items from "../components/tabs/clothingitems.js";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


// test('first test', () => {
//     expect(true).toBe(true);
// })


//this info you will get from your users component, get info from a mock account
const user = {
    email: "email@gmail.com",
    email_verified: true,
    sub: "sub from auth0",
    name: "Kimberly",
    picture: "https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c"
}


jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

afterEach(() => {
    cleanup();
})

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

describe("Test", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
        global.fetch = jest.fn(() =>
        Promise.resolve({
        json: () => Promise.resolve([{
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
            "rate": 3.9,
            "count": 120
            }
            }]),
  })
);
    });


    // test("User info is read", () => {
    //     render(<Items user={user} />);

    // });
    test("render Clothing Items", async() => {
        await act(async () => {
            render(<Items  />, container)
            
        })
        console.log(container.innerHTML);
        expect(container.querySelectorAll(".card").length).toBe(1);
    })

    // test('should render component stuff', () => {
    //     render(<Items />)
    //     expect(screen.getByText(/Winter/))
    // })




    
});


