import Button from './Button'

interface ButtonSectionProps {
  buttons: string[];
}

function ButtonSection({ buttons }: Readonly<ButtonSectionProps>) {
  return (<div className="buttonSection">{buttons.map((path: string) => <Button key={path} path={path}/>)}</div>)
}

export default ButtonSection
