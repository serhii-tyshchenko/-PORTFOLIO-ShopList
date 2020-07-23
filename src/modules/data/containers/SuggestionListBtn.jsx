import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions';
import { UIIconButton } from 'modules/ui';

const SuggestionListBtn = () => {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(showModal({ modalName: 'sugg', data: null }));
    }
    return (
        <UIIconButton icon="heart" onClick={handleClick} />
    );
};

export { SuggestionListBtn };
