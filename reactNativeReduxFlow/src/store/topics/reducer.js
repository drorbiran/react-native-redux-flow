// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './actionsTypes'
import _ from 'lodash';


const INITIAL_STATE = {
    topicsByUrl: undefined,
    selectedTopicUrls: []
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.TOPICS_FETCHED:
            return {...state,topicsByUrl: action.topicsByUrl};
        default:
            return state;
    }
};

//selectors
export function getTopicsByUrl(state) {
    return state.topics.topicsByUrl;
}

export function getTopicsUrlArray(state){
    return _.keys(state.topics.topicsByUrl);
}