import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import t from 'tcomb-form-native';
import { strings } from '../../locales/i18n';
import GeneralButton from '../components/GeneralButton';

const Form = t.form.Form;

class LanguageSetting extends Component {

    turnStateToOptions = (arrOfLang) => {
        const options = {};
        for (let i = 0; i < arrOfLang.length; i++) {
            options[arrOfLang[i].code] = arrOfLang[i].lang;
        }
        return options;
    };

    changeLanguage = () => {
        const val = this._form.getValue();
        if (val) {
            this.props.changeLanguage(val.language);
        } else {
            alert(strings('settings.language.alert_select'));
        }
    }
    
    render() {
        const selectOptions = this.turnStateToOptions(this.props.languages);
        const Language = t.enums(selectOptions);
        const ListLanguages = t.struct({
            language: Language
        });
        const options = {
            auto: 'none',
            fields: {
                language: {
                    item: {
                        options: selectOptions
                    }
                }
            }
        }

        const value = {
            language: this.props.currLang
        };

        return (
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c}
                    type={ListLanguages}
                    value={value}
                    options={options}
                />
                <View style={styles.button}>
                    <GeneralButton
                        title={strings('settings.language.change_button')}
                        onPress={() => this.changeLanguage()}
                        width={90}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'column', 
    },
    button: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
});

export default LanguageSetting;
