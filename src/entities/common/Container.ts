import EntityBase from '../../core/Component';
import * as BABYLON from 'babylonjs';
import IComponentProps from '../../core/common/IComponentProps';

/**
 * The base for making container controls.
 */
export default abstract class Container<
    T extends IComponentProps
> extends EntityBase<T> {
}