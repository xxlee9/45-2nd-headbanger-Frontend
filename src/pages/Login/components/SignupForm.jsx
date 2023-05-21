import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { fontMix, flexSort, boxSize } from '../../../styles/mixin';

const SignupForm = ({ email, handleGoBackToEmailInput }) => {
  const [formData, setFormData] = useState({
    email: email,
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
    passwordError: '',
    passwordTouched: false,
    agreement1Checked: false,
    agreement2Checked: false,
  });

  const handlePasswordChange = e => {
    setFormData(prevState => ({
      ...prevState,
      password: e.target.value,
      passwordError: '',
      passwordTouched: true,
    }));
  };

  const handleConfirmPasswordChange = e => {
    setFormData(prevState => ({
      ...prevState,
      confirmPassword: e.target.value,
      passwordError: '',
      passwordTouched: true,
    }));
  };

  const handleAgreement1Change = () => {
    setFormData(prevState => ({
      ...prevState,
      agreement1Checked: !prevState.agreement1Checked,
    }));
  };

  const handleAgreement2Change = () => {
    setFormData(prevState => ({
      ...prevState,
      agreement2Checked: !prevState.agreement2Checked,
    }));
  };

  const handleSignup = () => {
    const { password, confirmPassword, agreement1Checked, agreement2Checked } =
      formData;
    if (password !== confirmPassword) {
      setFormData(prevState => ({
        ...prevState,
        passwordError: '비밀번호가 일치하지 않습니다.',
      }));
      return;
    }

    if (!agreement1Checked || !agreement2Checked) {
      alert('필수 동의 사항에 모두 동의해주세요.');
      return;
    }

    // 회원가입 로직을 작성합니다
    // 이메일, 비밀번호, 이름, 핸드폰 번호 값을 서버로 전송하여 회원가입 처리를 수행합니다
  };

  return (
    <>
      <TitleWrapper>
        <FormTitle>
          <div>비밀번호 설정 및 개인정보제공</div>
          <p>
            비밀번호는 대문자, 소문자, 숫자를 포함하여 10자 이상이어야 합니다.
          </p>
        </FormTitle>
        <GoBackButton onClick={handleGoBackToEmailInput} />
      </TitleWrapper>
      <FormInput type="email" value={formData.email} disabled />
      <FormInput
        type="password"
        value={formData.password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
      />
      <FormInput
        type="password"
        value={formData.confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="비밀번호 확인"
      />
      <FormValidation>
        <span>&nbsp;</span>
        {formData.passwordTouched &&
          formData.password !== formData.confirmPassword &&
          formData.password !== '' &&
          formData.confirmPassword !== '' && (
            <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
          )}
        {formData.passwordTouched &&
          formData.password === formData.confirmPassword &&
          formData.password !== '' &&
          formData.confirmPassword !== '' && (
            <SuccessText>비밀번호가 일치합니다.</SuccessText>
          )}
      </FormValidation>
      <Line />
      <FormInput
        type="text"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        placeholder="이름"
      />
      <FormInput
        type="tel"
        value={formData.phoneNumber}
        onChange={e =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        placeholder="핸드폰 번호"
      />
      <CheckboxWrapper>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={formData.agreement1Checked}
            onChange={handleAgreement1Change}
          />
          본인은 cvg 개인정보 보호정책에 명시된 바와 같이 필수적인 개인정보 수집
          및 사용에 동의합니다.
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={formData.agreement2Checked}
            onChange={handleAgreement2Change}
          />
          본인은 cvg 개인정보 보호정책에 명시된 바와 같이 필수적인 개인정보 수집
          및 사용에 동의합니다.
        </CheckboxLabel>
      </CheckboxWrapper>
      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
    </>
  );
};

export default SignupForm;

export const FormContainer = styled.div``;
export const TitleWrapper = styled.div`
  ${flexSort('space-between', 'center')};
`;
export const FormTitle = styled.div`
  ${fontMix(24, theme.mainBlack)}
  > p {
    ${fontMix(12, theme.mainBlack)}
    margin-top: 10px;
  }
`;

export const FormInput = styled.input`
  ${boxSize(640, 40)};
  ${fontMix(16, theme.deepGrey)}
  margin-top: 16px;
  padding-left: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: ${theme.deepGrey};
  }
`;

const FormValidation = styled.div`
  ${flexSort('flex-start', 'center')};
  margin-top: 8px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const SuccessText = styled.p`
  color: green;
  font-size: 14px;
`;

const SignupButton = styled.button`
  ${boxSize(640, 40)}
  background-color: ${theme.mainBlack};
  color: ${theme.white};
  border-radius: 10px;
  margin-top: 40px;
  border: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

export const GoBackButton = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${require('../../../assets/images/Login/goback.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.div`
  ${boxSize(640, 0)}
  border: 1px solid ${theme.borderGrey};
  margin: 4px 0;
`;

const CheckboxWrapper = styled.div`
  margin-top: 16px;
`;

const CheckboxLabel = styled.label`
  ${fontMix(12, theme.mainBlack)}
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;
