import React, {Component} from 'react';
import { Card, CardSection, Input } from './common';
import { Picker, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>


                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="888-888-8888"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>


                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle} >Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value  => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.item label="Monday" value="Monday" />
                        <Picker.item label="Tuesday" value="Tuesday" />
                        <Picker.item label="Wednesday" value="Wednesday" />
                        <Picker.item label="Thursday" value="Thursday" />
                        <Picker.item label="Friday" value="Friday" />
                        <Picker.item label="Saturday" value="Saturday" />
                        <Picker.item label="Sunday" value="Sunday" />
                    </Picker>

                </CardSection>
            </View>
        );
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);