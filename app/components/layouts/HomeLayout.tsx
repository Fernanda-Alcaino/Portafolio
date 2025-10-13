import {Avatar, Button, Layout} from "antd";
import Logo from "~/components/atoms/Logo";
import ButtonPagina from "~/components/atoms/Button";


const { Header, Footer, Content } = Layout;

function HeaderCont() {
    return null;
}

export default function HomeLayout() {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <HeaderCont />
                <Logo />
            </Header>
            <Content style={contentStyle}>
                <h1>Bienvenido a mi portafolio</h1>
            </Content>
            <Footer style={footerStyle}>
            <Button/>
            </Footer>
        </Layout>
    );
}
const layoutStyle = {

}
const headerStyle = {

}
const contentStyle = {

}
const footerStyle = {

}