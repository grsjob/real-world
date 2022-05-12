import {Route, Routes} from "react-router-dom";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import Home from "../pages/home/home";
import Settings from "../pages/settings/settings";
import Profile from "../pages/profile/profile";
import CreateEditArticle from "../pages/create-edditArticle/create-editArticle";
import Article from "../pages/article/article";
import Register from "../pages/register-login/register";


function App() {
    return (
        <Routes>
            <Route path='/' element={<PageWrapper />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Register />} />
                <Route path="register" element={<Register isRegisterPage />} />
                <Route path="settings" element={<Settings />} />
                <Route path=":user" element={<Profile />} />
                <Route path="editor" element={<CreateEditArticle />} />
                <Route path="article/:articleId" element={<Article />} />
            </Route>
        </Routes>
    );
}

export default App;
