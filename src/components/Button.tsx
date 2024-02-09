export interface ButtonProps {
  value: number;
  text: string;
}

function Button({ value, text }: Readonly<ButtonProps>) {
  return (
    <a className='button' target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=0c753a5fcaad4b74a8ca1f3442c8d8e8">
      <p>{text}</p>
      <p>${value}</p>
    </a>
  )
}

export default Button
