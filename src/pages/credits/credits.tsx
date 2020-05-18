import * as React from "react";
import { Table } from 'reactstrap';
import OptionButton from "../../components/credit/optionButton";
import getAllCredits from '../../api/credits/getAllCredits';
import getCreditsByStatus from '../../api/credits/getCreditsByStatus';
import updateCredit from '../../api/credits/updateCredit';
import { updateCreditSchema, Credit } from "../../models/credit";
import { useDispatch } from 'react-redux';

const Credits = () => {

    const [credits, setCredits] = React.useState<any[]>([]);
    const dispatch = useDispatch();

    const GetCredits = async () => {
        const res = await getAllCredits();
        if (res.data) {
            setCredits(res.data);
        }
    }

    const GetCreditsByStatus = async (status: boolean) => {
        const res = await getCreditsByStatus(status);
        if (res.data) {
            setCredits(res.data);
        }
    }

    const UpdateCredit = async (credit: Credit) => {
        const creditData: updateCreditSchema = { statusPayCredit: true };
        const res = await updateCredit(credit.id, creditData);
        GetCredits();
        dispatch({type: 'INCREMENT_BANK_AMOUNT', value: credit.amount});
    }

    React.useEffect(() => {
        GetCredits();
    }, []);

  return (
    <>
        <div style={{display: 'flex', marginTop: '3em'}}>
            <div className="group-buttons" onClick={() => GetCreditsByStatus(true)}>
                <OptionButton title={'aprobados'}/>
            </div>
            <div className="group-buttons" onClick={() => GetCreditsByStatus(false)}>
                <OptionButton title={'denegados'}/>
            </div>
            <div className="group-buttons" onClick={() => GetCredits()}>
                <OptionButton title={'Todas'}/>
            </div>
        </div>
        <div 
            style={{
                padding: '5%'
            }}
        >
            <Table style={{backgroundColor: '#444444'}}>
                <thead>
                <tr style={{color: 'white'}}>
                    <th>#</th>
                    <th>nombre</th>
                    <th>Estado</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Pagar</th>
                </tr>
                </thead>
                <tbody style={{color: 'white'}}>
                    {
                        credits.map((credit: any) => {
                        return (<tr key={credit.id} >
                            <th scope="row">{credit.id}</th>
                            <th scope="row">{credit.user.name}</th>
                            <td>{credit.status ? 'aprobada' : 'denegada'}</td>
                            <td>{credit.amount}</td>
                            <td>{credit.createdAt}</td>
                            <td>
                                {!credit.statusPayCredit && credit.status ? <button onClick={() => UpdateCredit(credit)}>
                                    {'pagar'}
                                </button>: ''}
                            </td>
                        </tr>)
                        })
                    }
                {/* <tr>
                        <th scope="row">1</th>
                        <td>denegada</td>
                        <td>aprobada</td>
                        <td>aprobada</td>
                        <td>
                            <button
                                key={name}
                            >
                                {'pagar'}
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </Table>
        </div>

    </>
  );
};

export default Credits;
