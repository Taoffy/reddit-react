import React from "react";

import { CommentsIcon } from "./CommentsIcon";
import { ShareIcon } from "./ShareIcon";
import { BlockIcon } from "./BlockIcon";
import { SaveIcon } from "./SaveIcon";
import { WarningIcon } from "./WarningIcon";
import { VoteIcon } from "./VoteIcon";
import { EIcons } from "../../utils/react/enums";

interface IIcon {
    name : EIcons;
    size?: number;
    direction?: "up" | "down";
}


const Icon = ({name, size = 14, direction = "up"}: IIcon) => {
    switch(name) {
        case EIcons.comments: 
            return (
                <CommentsIcon size={size} />
            );

        case EIcons.share:
            return (
                <ShareIcon size={size} />
            );

        case EIcons.block:
            return (
                <BlockIcon size={size} />
            );

        case EIcons.save:
            return (
                <SaveIcon size={size} />
            );

        case EIcons.warning:
            return (
                <WarningIcon size={size} />
            );

        case EIcons.vote:
            return (
                <VoteIcon size={size} direction={direction} />
            );

        default:
            return null;
    }
};

export default Icon;