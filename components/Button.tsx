import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: { children: any, onClick: () => void , disabled?: boolean }) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    />
  );
}
