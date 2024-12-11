import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffaa00;
  }
`;

function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ContactContainer>
      <h1>Contact/Booking</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>Name</Label>
          <Input {...register('name')} required />
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input {...register('email')} type="email" required />
        </FormField>
        <FormField>
          <Label>Message</Label>
          <TextArea {...register('message')} required />
        </FormField>
        <SubmitButton type="submit">Send</SubmitButton>
      </FormContainer>
    </ContactContainer>
  );
}

export default Contact;