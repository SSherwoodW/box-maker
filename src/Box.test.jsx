import { describe, it, expect } from 'vitest';
import {render} from '@testing-library/react'
import Box from "./Box"

describe('Box', () => {
    it('renders without crashing', () => {
        render(<Box />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Box />)
        expect(asFragment).toMatchSnapshot()
    })
})