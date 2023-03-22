import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Falkor</title>
        <meta name="description" content="Falkor - Aproximando jogadores e times" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 mt-3">
            <div className="card">
              <div className="card-header text-center">
                SBFA - Sistema Brasileiro de Futebol Amador
              </div>

              <div className="card-body">
                <div className="form-group">
                  <span className=""> E-mail </span>
                  <input type="email" id="loginEmail" className="form-control"></input>
                </div>

                <div className="form-group mt-3">
                  <span className=""> Senha </span>
                  <input type="password" id="loginPassword" className="form-control"></input>
                </div>
              </div>

              <div className="card-footer text-right">
                <Button variant="success"> Logar </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
