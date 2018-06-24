import React from 'react';
import {connect} from 'react-redux';
import FormList from '../components/formList';
import {formSubmit} from '../actions/all';






export const FormContainer = connect( state => ({
          tier1items: state.tier1promos,
          header: "Promo: "
        }),
        dispatch => ({
          onSubmit(formElement) {

            dispatch(formSubmit(formElement));
          }

        })
        )(FormList)
				



