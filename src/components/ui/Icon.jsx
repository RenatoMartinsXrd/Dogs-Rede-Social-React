const sizeMap = {
  small: { width: 18, height: 18 },
  medium: { width: 30, height: 30 },
  large: { width: 44, height: 44 }
}

export const Icon = ({ icon: Icon, size = 'small', ...props }) => {
  const iconSize = sizeMap[size] || sizeMap['small']

  return <Icon {...iconSize} {...props} />
}
