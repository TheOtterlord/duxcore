import { SocketSession } from "../classes/SocketSession";
import SocketPayloadController from "../controllers/SocketPayloadController";
import { SocketPayload } from "../util/types/socket";

export type ExecutorMethod = (payload: SocketPayloadController, session: SocketSession) => void;
export interface WSOperatorOpts {
  opCode: string, // What is the code for this operator?
  enabled?: boolean // Is this WSOperator enabled?
}

const defaultExecutor = (payload, session) => {return null;};

export default class WSOperator {
  private _opCode: string;
  private _enabled: boolean;
  private _executor: ExecutorMethod = defaultExecutor;

  constructor(opts: WSOperatorOpts) {
    this._opCode = opts.opCode;
    this._enabled = opts.enabled ?? true;
  }

  get opCode(): string { return this._opCode; }
  get enabled(): boolean { return this._enabled; }
  get replyCall(): string { return `${this._opCode}:reply`; }

  setExecutor(executor: ExecutorMethod): this {
    this._executor = executor;
    return this;
  }

  execute(payload: SocketPayloadController, session: SocketSession): Promise<WSOperator> {
    return new Promise((resolve, _r) => {
      this._executor(payload, session);
      resolve(this);
    })
  }
}