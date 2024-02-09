export const texts = {
  title: 'Bill Andersen ',
  profilePic: 'https://private-user-images.githubusercontent.com/55720621/303546384-48da50e9-38a7-44fb-9d81-6b7da131a773.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc0NTAzMTgsIm5iZiI6MTcwNzQ1MDAxOCwicGF0aCI6Ii81NTcyMDYyMS8zMDM1NDYzODQtNDhkYTUwZTktMzhhNy00NGZiLTlkODEtNmI3ZGExMzFhNzczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA5VDAzNDAxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MjQwMTE1MWRiM2VlOWQ2MjhhNmU3ZGQwZWYxMDM2ZDU5NGJjMjMzYjAwMDY0NzZhNDYzNmU4YzI3OWNhNzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Yet5Y3M0mmCCfli3bO7eslMy6oGvM9vRbckI168HQVY',
  banner: 'https://private-user-images.githubusercontent.com/55720621/303540942-d8df00ba-8f33-4e01-aed0-1d5391e8e726.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc0NDc2NDEsIm5iZiI6MTcwNzQ0NzM0MSwicGF0aCI6Ii81NTcyMDYyMS8zMDM1NDA5NDItZDhkZjAwYmEtOGYzMy00ZTAxLWFlZDAtMWQ1MzkxZThlNzI2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA5VDAyNTU0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlYzk4ZDBkZGRjYWJiODc2ZDk2YTdlNWJiZWIyMzAyNjA0NTE2YzE0ODQ0ZTQ1MzFmY2M1MjE4ZDgxZjFmNDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7xCAcEe8MHucVv4GTr86ymie_uR0UhoUnbgSyUa3gmM',
  description: 'Algunas personas me conocen de Youtube, muchas otras de Tiktok. En lo que parecen estar de acuerdo es en mi parecido con "Nicolás Durruti". Si estás acá es porque estás pensando en ayudarme. Yo te diría que si, pero soy parte involucrada.',
  footer: 'Todos los derechos reservados.'
};

export interface Contribution {
  text: string;
  values: number[];
}

export interface ButtonsContent {
  oneTime: Contribution;
  suscription: Contribution;
}

export const buttonsContent: ButtonsContent = {
  oneTime: {
    text: 'Aporte único',
    values: [1000,2000,5000,10000]
  },
  suscription: {
    text: 'Suscripción mensual',
    values: [1000,2000,5000,10000]
  },
};
