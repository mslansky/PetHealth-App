import React from 'react'

export default function ProfileForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Profile-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}