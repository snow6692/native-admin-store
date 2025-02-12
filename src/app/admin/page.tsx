import { redirect } from 'next/navigation'
import React from 'react'

function AdminPage() {
  return redirect("/admin/dashboard")
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage