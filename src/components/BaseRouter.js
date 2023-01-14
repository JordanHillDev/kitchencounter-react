import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";
import Test from "./Test";

const BaseRouter = () => (
    <Layout>
        <Routes>
            <Route path='main' element = {<Main />} />
            <Route path='main/test' element = {<Test />} />
        </Routes>
    </Layout>
)

export default BaseRouter