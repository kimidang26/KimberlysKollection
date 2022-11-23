import { render, screen, cleanup } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";
import Checkout from "../components/tabs/checkout";


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
    });


    test("render Checkout Items", () => {
        render(<Checkout />)
    })

    
});

