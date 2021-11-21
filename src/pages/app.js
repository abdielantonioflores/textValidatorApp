import React from 'react';
import imagesIcon from '../assets/images/iconoText.png'
import '../assets/css/app.css'
import { API } from '../model/apis/apis'
import { COOKIE } from '../handler/cookie/cookie.handler'
import FetchService from '../services/service.fetch'
import Navbar from '../components/navbar/navbar'
import CardInfo from '../components/cardInfo/cardInfo'
import CardInfoIncon from '../components/cardInfo/cardInfoIcon'
import ResponseView from '../components/responseView/responseView'
import ModalResponse from '../components/modal/model-response';
export default class App extends React.Component {

    state = {
        display: "none",
        headerInfo: {
            Title: "Validador de texto",
            descripcion: "Este validador devolvera la respuesta  en formato json si el texto es palimdrome y  el valor enviado lo retornara invertido"
        },
        infoIcon: {
            icon: "ion-alert-circled font-icon",
            textInfo: "Aun no has validado ningun texto"
        },
        reponseApi: [],
        displaycardIcon: "",
        displayResponseView: "none",
        modal: {
            css: "modal-window ",
            message: "",
            typeMessage: ""
        }
    }


    // Actualizo los valores del modal ya sea para ocultar o mostrar dependiendo el mensaje que retorne
    setStatusModal = (res, op) => {
        if (op === "view") {
            this.setState({
                modal: {
                    css: "modal-window modal-window-target",
                    message: res.error,
                    typeMessage: "error"
                }
            })
        } else {
            this.setState({
                modal: {
                    css: "modal-window ",
                    message: "",
                    typeMessage: ""
                }
            })
        }

    }

    // Actualizo la respuesta de existir muestro el card donde se visualiza la data en formato json 
    setStatusViewResponse = (res, op) => {
        if (op === 'view') {
            this.setState({ displaycardIcon: "none", displayResponseView: "", reponseApi: res })
        } else {
            this.setState({ displaycardIcon: "", displayResponseView: "none", reponseApi: [] })
        }

    }

    // Encargado de enviar al api el texto que coloque en el componente input y el encargado de transmitir esa respuesta a toda la pagina 
    validatorText = (text) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-Powered-By': 'Express',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Content-Length': 66
            },
        }

        FetchService(requestOptions, API().api_validator_text + "?text=" + text).then(res => {
            if (res.error === "" && res.statusCode === 200) {
                var response = []
                if (COOKIE.get("ApiResponse") !== undefined && COOKIE.get("ApiResponse") !== "") {
                    response = JSON.parse(COOKIE.get("ApiResponse"))
                    response.push(res.res)
                    COOKIE.set("ApiResponse", JSON.stringify(response))
                    this.setStatusViewResponse(response, 'view')
                } else {
                    response.push(res.res)
                    COOKIE.set("ApiResponse", JSON.stringify(response))
                    this.setStatusViewResponse(response, 'view')
                }

            } else {
                this.setStatusModal(res, "view")

            }

        })
    }

    // Borro las cookie existentes ya que el dato va a persistir siembre hasta que se borre el historial en este caso la cookie 
    deleteHistory = () => {
        var response = []
        COOKIE.delete("ApiResponse")
        this.setStatusViewResponse(response, 'delete')
    }


    // si mantengo datos en la cookie uso  este metodo para cargar la data que tengo de historial en la cookie si, siempre y cuando esta cookie exista 
    componentDidMount() {
        if (COOKIE.get("ApiResponse") !== undefined && COOKIE.get("ApiResponse") !== "") {
            var response = []
            response = JSON.parse(COOKIE.get("ApiResponse"))
            this.setStatusViewResponse(response, 'view')
        }
    }

    render() {
        // instancio mis variables o valores que usare en lo largo del componente
        const { infoIcon, headerInfo, displaycardIcon, displayResponseView, reponseApi, modal } = this.state
        return (
            <div className="container-fluit">
                {/* Componente navbar */}
                <Navbar />
                <div className="row p-0 m-0  d-flex justify-content-center">
                    <div className="col-md-12 mt-2">
                        {/* onponete card */}
                        <CardInfo headerInfo={headerInfo} validator={this.validatorText} />
                    </div>

                    {/* componente card Informativo */}
                    <CardInfoIncon info={infoIcon} displaycardIcon={displaycardIcon} />

                    {/* componente de visualizacion del resultado de Apis */}
                    <ResponseView responseApi={reponseApi} displayResponseView={displayResponseView} deleteHistory={this.deleteHistory} />

                </div>
                {/* Componente modal, encargado de mostrar lkas alertas de no  respondes un statuscode de 200 */}
                <ModalResponse modal={modal} setStatusModal={this.setStatusModal} />
            </div>

        )
    }

}

