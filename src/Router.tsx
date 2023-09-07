import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogPost/BlogPost";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ScrollToTop from "./ui/scrollToTop/ScrollToTop";
import AuthorPage from "./pages/authorPage/AuthorPage";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

const Router: FC = () => {
    return (
        <>
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/post" element={<BlogPost />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/author" element={<AuthorPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </>
    );
};

export default Router;
