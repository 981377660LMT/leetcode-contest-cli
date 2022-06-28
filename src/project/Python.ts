import Project from '.'
import { ensureFnDir } from '../lib/utils'
import { Language, Problem } from '../types'
import BaseProject from './BaseProject'

export default class Python extends BaseProject implements Project {
  constructor(rootDir: string, libDir: string, contestId: string, problemId: string) {
    super(rootDir, libDir, contestId, problemId, Language.Python)
  }

  protected getCodeTemplate(problem: Problem): string {
    return `${problem.templates['python']}`
  }

  protected getBuiltBaseFn(): string {
    return 'solution.py'
  }

  protected getBuildCmd(srcFn: string, outFn: string): string {
    ensureFnDir(outFn)
    return `cp ${srcFn} ${outFn}`
  }

  getSubmitLanguage(): string {
    return 'python'
  }
}
