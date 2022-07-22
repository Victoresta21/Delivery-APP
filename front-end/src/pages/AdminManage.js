import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AdminForm from '../components/AdminForm';
import AdminTable from '../components/AdminTable';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

export default function AdminManage() {
  const { user } = useContext(GlobalContext);

  if (user.role !== 'administrator') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Cadastrar novo usuário</h2>
      <AdminForm />
      <AdminTable />
    </div>
  );
}
