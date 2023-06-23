import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function TooltipIcon() {
    const [openedRepeatPassword, setOpenedRepeatPassword] = useState(false);
    const [valueRepeatPassword, setValueRepeatPassword] = useState('');
    const validRepeatPassword = valueRepeatPassword.trim().length >= 6;
    return (
  
        <PasswordInput
          label="Repetir contraseña"
          miw={150}
          required
          placeholder="Your password"
          onFocus={() => setOpenedRepeatPassword(true)}
          onBlur={() => setOpenedRepeatPassword(false)}
          mt="md"
          value={valueRepeatPassword}
          onChange={(event) => setValueRepeatPassword(event.currentTarget.value)}
        />
    );
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
    >
      <PasswordInput
        label="Contraseña"
        miw={150}

        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}

export function InputTooltip() {
  return (
    <>
      <TooltipFocus />
      <TooltipIcon />
    </>
  );
}