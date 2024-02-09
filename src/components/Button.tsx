export interface ButtonProps {
  path: string;
}

function Button({ path }: Readonly<ButtonProps>) {
  return (
    <a className='button' target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=0c753a5fcaad4b74a8ca1f3442c8d8e8">
      <img width="200rem" className="buttonImage" src={`/assets/buttons/${path}`} alt={`${path.split('/')[0]} ${path.split('/')[1].split('.')[0]} button`} />
    </a>
  )
}

export default Button
