import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions';
import { UIIconButton } from 'modules/ui';

const SuggestionListBtn = () => {
    const dispatch = useDispatch();
    const STR = useContext(Localization);

    function handleClick() {
        dispatch(showModal({ modalName: 'sugg', data: null }));
    }

    return (
        <UIIconButton icon="heart" title={STR.FAVORITES_LIST} onClick={handleClick} />
    );
};

export { SuggestionListBtn };
