import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100 / 4;
  console.log(testResult.score)
  const createPassLabel = () => {
    switch (testResult.score) {
      case (testResult.score>0):
        return 'noo its very week and bad but you know you can do it better';
      case 1:
        return 'Is very weak but you know you can do it better';
      case 2:
        return 'Not bad but you know you can do it better';
      case 3:
        return 'Good but you can do it better';
      case 4:
        return 'Strong ,Very Will';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFC107';
      case 3:
        return '#6baa80';
      case 4:
        return '#00b500';
      default:
        return 'red';
    }
  }
  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })

  return (
    <>
      <div className="progress" style={{ height: '7px', borderRadius: '8px' }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
    </>
  )
}

export default PasswordStrengthMeter