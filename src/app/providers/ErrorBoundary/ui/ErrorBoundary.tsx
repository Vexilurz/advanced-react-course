import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render (): ReactNode {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback="">
        <PageError error={error} />
      </Suspense>
    }

    return children
  }
}
