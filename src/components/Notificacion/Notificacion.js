import notie from 'notie';
import { alert, force, confirm, input, select, date, setOptions, hideAlerts } from 'notie';

const Notificacion = ({type, text, time = 2}) => {
    return notie.alert({ text, type, time });
}

export default Notificacion
