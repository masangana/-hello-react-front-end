import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from './redux/messageSlice';

export const Greetings = () => {
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <div>
            {message.loading ? (
                <h2>Loading...</h2>
            ) : message.error ? (
                <h2>{message.error}</h2>
            ) : (
                
                <div>

                    {  
                        

                        Object.keys(message.messages.data).map((key) => {
                            return (
                                <div key={key}>
                                    <h2>{message.messages.data[key].greeting}</h2>
                                </div>
                            );
                        })

                    }
                       
                    
                </div>
            )} 

        </div>
    );
}

export default Greetings;