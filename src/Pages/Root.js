import { Div } from "../styles/Div"

import Bottom from "../Components/Bottom"
import ContactHeader from "../Components/Header"
import About from "./About"
import Main from "./Main"
import Product from "./Product"
import Tab from "./Tab/Tab"
import UseCase from "./UseCase"
import Values from "./Values"

const Root = () => {
    return (
        <Div>
            <ContactHeader />
            <Main />
            <Div width="100%" display="flex" direction="column">
                <Product />
                <UseCase />
                <Values />
                <Tab />
                <About />
            </Div>
            <Bottom />
        </Div>
    )
}

export default Root
