import React from 'react';
import Popup from 'react-popup';

function Prompt (props) {
    return(
        Popup.create({
            title: {props.title},
            content: {props.content},
            buttons: {
                right: {
                    text: 'Save',
                    className: 'success',
                    action: function () {
                    Popup.alert('You pressed the Save btn');

                    /** Close this popup. Close will always close the current visible one, if one is visible */
                    Popup.close();
            }
                }
            }
        });
    );
}

export default Prompt;