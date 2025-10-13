import {Button} from "antd";





interface ButtonProps {
    text: string,
}

const ButtonPagina  = (): React.JSX.Element => {
    return (
        <Button color="default" variant="link">
          Experiencia
        </Button>
    );


}

export default Button;