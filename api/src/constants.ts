import { registerEnumType } from '@nestjs/graphql'

export enum MutationStatus {
  SUCCESS,
  FAILED
}

registerEnumType(MutationStatus, {
  name: 'MutationStatus',
})

export const allowedMutationStatus: Record<keyof typeof MutationStatus, any> = {
  SUCCESS: 'success',
  FAILED: 'failed',
}
