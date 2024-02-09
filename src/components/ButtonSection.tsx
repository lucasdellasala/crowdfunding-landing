import { Contribution } from './../config'
import Button from './Button'

interface ButtonSectionProps {
  buttons: Contribution;
}

function ButtonSection({ buttons }: Readonly<ButtonSectionProps>) {
  return (<div className="buttonSection">{buttons.values.map((value: number) => <Button key={value} value={value} text={buttons.text}/>)}</div>)
}

export default ButtonSection
