import assert = require('assert');

import {
  MutantRunResult,
  SurvivedMutantRunResult,
  ErrorDryRunResult,
  KilledMutantRunResult,
  MutantRunStatus,
  DryRunResult,
  CompleteDryRunResult,
  RunStatus,
} from '@stryker-mutator/api/test_runner2';

export function expectKilled(result: MutantRunResult): asserts result is KilledMutantRunResult {
  assert.equal(result.status, MutantRunStatus.Killed);
}

export function expectCompleted(runResult: DryRunResult): asserts runResult is CompleteDryRunResult {
  assert.equal(runResult.status, RunStatus.Complete);
}
export function expectErrored(runResult: DryRunResult): asserts runResult is ErrorDryRunResult {
  assert.equal(runResult.status, RunStatus.Error);
}
export function expectSurvived(runResult: MutantRunResult): asserts runResult is SurvivedMutantRunResult {
  assert.equal(runResult.status, MutantRunStatus.Survived);
}
