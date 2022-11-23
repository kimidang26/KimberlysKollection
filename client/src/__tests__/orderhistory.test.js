import {render, screen, cleanup} from "@testing-library/react";
import History from "../components/tabs/orderhistory";
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";


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

describe ("Display", ()=> {

    
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


    test("Gets Display", ()=> {
        render(<History />)
    });

    test("displays items from api", ()=> {

    })



});


// test('should render component stuff', () => {
//     render(<History />) 
//     const order_hist_tag = screen.getByTe
// })