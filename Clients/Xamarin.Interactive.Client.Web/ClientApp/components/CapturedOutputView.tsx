// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as React from 'react'

import { CapturedOutputSegment } from '../evaluation'

import './CapturedOutputView.scss'

export class CapturedOutputView extends React.Component<{ segments: CapturedOutputSegment[] }> {
    render() {
        return (
            <div
                className='CapturedOutputView-container'>
                {this.props.segments.map((segment, key) => {
                    if (segment.value)
                        return <span
                            key={key}
                            className={segment.fileDescriptor === 2 ? 'stderr' : 'stdout'}
                            ref={span => {
                                if (span)
                                    span.scrollIntoView({ behavior: 'smooth' })
                            }}>
                            {segment.value}
                        </span>
                })}
            </div>
        )
    }
}