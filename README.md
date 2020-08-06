# react native hide/show password

Component implementation to show/hide password on click of an icon.

Sample usage of the component is as below

<PasswordTextBox icon="lock" label="Old Password" onChange={(v) => this._updateState('old', v)} />

# RECOMMENDED to use native components
Updated code is available in new file PasswordTextBoxNative.js

     <Password
            label={'Password'}
            onChange={password => this.setState({password})}
            validators={this.validations.password}
            height={30}
          />
